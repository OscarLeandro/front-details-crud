export default async function handler(req, res) {
  console.log('haciendo peticion')
  if (req.method === "GET") {
    console.log('haciendo peticion get')
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
      const data = await getData('http://localhost:8000/api/member')
      res.status(200).json(data)
    } catch (error) {
      res.status(401).end();
      
    }
  }else if(req.method === 'POST'){
    console.log('haciendo peticion post')

    try {
      const data = await postData('http://localhost:8000/api/member', req.body)
      
      res.status(201).json(data)
    } catch (error) {
      console.log(error);
      res.status(401).end();
    }

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
    
  }
}
