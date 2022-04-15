import Category from "../components/Category/Category"
import PostGrid from "../components/PostGrid/postgrid"

export default function Home() {
  return (
    <div className="home">
       <Category />
       <PostGrid />
    </div>
  )
}
