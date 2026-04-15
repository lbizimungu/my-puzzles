interface ChangePageProps {
    number: number
}

export default function ChangePage({ number }: ChangePageProps) {
    return (
        <div className="change-page">
            <h1>Change {number}</h1>
            <p>This is change page {number}. It will contain the details of the change made in this step.</p>
        </div>
    )
}