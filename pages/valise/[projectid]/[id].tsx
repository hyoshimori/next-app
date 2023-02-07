import { useRouter } from 'next/router'

const id = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  const projectID = router.query['projectid']

  // id is an object
  const id = router.query['id']
  return (
    <div>
      <h1>ID</h1>
      <h2>Project Id: {projectID}</h2>
      <h2>ID: {id}</h2>
    </div>
  )
}
export default id
