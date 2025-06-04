import { useState, useEffect } from 'react'
import ItemList from '../components/ItemList'
import ItemSearch from '../components/ItemSearch'
import { useDebounce } from '../hooks/useDebounce'
import LoadingSkeleton from '../components/LoadingSkeleton'

export default function Items() {
    const [search, setSearch] = useState('')
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem('fav-items')) || []
    )
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])

    const debouncedSearch = useDebounce(search, 300)

    useEffect(() => {
        setLoading(true)
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/playlists`, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })

            .then(res => res.json())
            .then(data => {
                setItems(data.data || [])
                setLoading(false)
            })
            .catch(err => {
                console.error('Error cargando Deezer:', err)
                setLoading(false)
            })
    }, [])

    const filtered = items.filter(p =>
        p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    )

    return (
        <section>
            <ItemSearch value={search} setValue={setSearch} />
            {loading ? (
                <LoadingSkeleton />
            ) : (
                <ItemList items={filtered} favorites={favorites} setFavorites={setFavorites} />
            )}
        </section>
    )
}