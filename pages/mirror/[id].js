import { useRouter } from 'next/router';

export default function MirrorDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Mirror #{id}</h1>
      <p>Detailed view of a specific reflection.</p>
    </div>
  );
}
