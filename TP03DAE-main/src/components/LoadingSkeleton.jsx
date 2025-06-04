import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../css/modules/components.css'

export default function LoadingSkeleton() {
  return (
    <div className="grid-container">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="card">
          <Skeleton height={140} />
          <Skeleton height={20} style={{ marginTop: '1rem' }} />
          <Skeleton height={30} width={120} />
        </div>
      ))}
    </div>
  )
}
