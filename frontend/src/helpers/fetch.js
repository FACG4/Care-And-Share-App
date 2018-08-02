const fetch = (obj, cb) => {

  const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {

    if(xhr.readyState === 4)
    if(xhr.status === 200){
      const response = xhr.responseText;
      cb(response)
      }
  }
  xhr.open(obj.method, obj.url);
  if(obj.data){
    const data= JSON.stringify(obj.data);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(data);
  } else {
    xhr.send();
  }

}

export default fetch;
