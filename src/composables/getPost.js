import { projectFireStore } from '@/firebase/config';
import {ref} from 'vue'

const getPost = (id) => {
	const post = ref(null);
	const error = ref(null);

	const load = async () => {
		try {
			// await new Promise (resolve =>{
			// 	setTimeout(resolve,2000)
			// })

			// let data = await fetch("http://localhost:3000/posts/"+id);
			// if (!data.ok) {
			// 	throw Error("Details doesn't exist");
			// }
			// post.value = await data.json();
			const res = await projectFireStore.collection('post').doc(id).get()

			if(!res.exists){
				throw Error('WHERE DID U GET THIS CODE???')
			}

			post.value = {...res.data(), id: res.id}
			console.log(post)
		} catch (err) {
			error.value = err.message;
		}
	};

	return { post, error, load };
};
export default getPost;