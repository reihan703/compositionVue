import { ref } from "vue";
import { projectFireStore } from '../firebase/config'

const getPosts = () => {
	const posts = ref([]);
	const error = ref(null);

	const load = async () => {
		try {
			// await new Promise((resolve) => {
			// 	setTimeout(resolve, 2000);
			// });

			// let data = await fetch("http://localhost:3000/posts");
			// if (!data.ok) {
			// 	throw Error("no data");
			// }
			// posts.value = await data.json();

			const res = await projectFireStore.collection('post')
			.orderBy('created', 'desc')
			.get()
			posts.value = res.docs.map(doc=>{
				return {...doc.data(),id:doc.id}
			})

		} catch (err) {
			error.value = err.message;
		}
	};

	return { posts, error, load };
};
export default getPosts;
