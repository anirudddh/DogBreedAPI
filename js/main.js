const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all' 
fetch(BREEDS_URL)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    //   console.log(data)
      const breedsObject = data.message; //Turn the message into an object
    //   console.log(breedsObject)
      const breedsArray = Object.keys(breedsObject) //Turn the object into an array 
    //   console.log(breedsArray)
      for (let i=0; i < breedsArray.length; i++) {
        const option = document.createElement('option') //<option></option>
        option.value = breedsArray[i] //<option value='breed'>
        option.innerText = breedsArray[i] //<option value='breed'>breed</option>
        document.querySelector('.selectdogs').appendChild(option)  //adds current <option> tag to the select box list of options
    }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

    document.querySelector('.selectdogs').addEventListener('change',selectingbreed)

    function selectingbreed(){
        // console.log(event.target.value)
        let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
        // console.log(url)
        fetch(url)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
                // console.log(data.message)
                document.querySelector('img').src=data.message
            })
            .catch(err => {
                console.log(`error ${err}`)

            });
        
    }
