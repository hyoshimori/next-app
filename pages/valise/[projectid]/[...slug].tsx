import { useRouter } from 'next/router'

const Other = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  const slug = router.query['slug']

  return (
    <div>
      <h1>ID</h1>
      <h2>slug: {slug}</h2>
    </div>
  )
}
export default Other
