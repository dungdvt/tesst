import Banner from "../components/banner"
import Card from "../components/card"
import Header from "../components/header"

const HomePage = () => {
    return <div>
        <Header />
        <Banner />
        <div className="flex gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
}

export default HomePage