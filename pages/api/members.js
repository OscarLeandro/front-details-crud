export default async function handler(req, res) {

  if (req.method === "GET") {
    
    async function getData(url = "") {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    }
    try {
      const data = await getData('http://localhost:8000/api/members')
      res.status(200).json(data)
    } catch (error) {
      res.status(401).end();
      
    }

  }else if(req.method === 'POST'){
    

    async function postData(url='',body={}){
      
      const response = await fetch(url,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(body),
      });
      return response.json();
      
    }

    try {
      const data = await postData('http://localhost:8000/api/members', req.body)
      
      res.status(201).json(data)
    } catch (error) {
      console.log(error);
      res.status(401).end();
    }

    
    
  } else if(req.method === 'PUT'){

    console.log('peticion put')
    async function updateData(url='',body={}){
      const response = await fetch(url, {
        method: 'PUT',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(body)
      });
      return response.json();
    }
    try {
      const data = await updateData(`http://localhost:8000/api/members/${req.body.id}`,req.body)
      res.status(200).json(data)
    } catch (error) {
      console.log(error);
      res.status(401).end();
    }
  }else if(req.method === 'DELETE'){
    console.log('peticion delete');
    async function deleteData(url=''){
      const response = await fetch(url,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json',
        },
      });
      return response.json();
    }
    try {
      const data = await deleteData(`http://localhost:8000/api/members/${req.body._id}`)
      res.status(200).json(data)
    } catch (error) {
      console.ltatuog(error);
      res.ss(401).end();
    }


  }
}
