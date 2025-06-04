import { toast } from 'react-toastify'

export const notifyFavorite = (added) => {
  toast[added ? 'success' : 'info'](
    added ? 'Agregado a favoritos' : 'Removido de favoritos'
  )
}
