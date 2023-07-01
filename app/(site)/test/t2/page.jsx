'use client'
import Form from "@components/Form4";


function page() {
  return (
    <>
      <div>test</div>
     

      <Form type="Create"
      post='{post}'
      setPost={()=> console.log('Expression')}
      submitting={()=> console.log('Expression')}
      handleSubmit={()=> console.log('Expression')}/>
    </>
  );
}

export default page;
