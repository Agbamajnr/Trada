import axios from 'axios'
import { ref } from 'vue';

const url = 'http://localhost:3030/api/waiting';

  const addEmail = (email) => {
    const data = ref('')
    const error = ref('')

    const handleReq = async () => {
      try {
        const res = await axios.post(url, {
          email
        })
         data.value =  res.data;
      } catch (err) {
        error.value = err
      }

      alert(data.value)
    }

    return { data, error, handleReq};
  }


  export default addEmail
