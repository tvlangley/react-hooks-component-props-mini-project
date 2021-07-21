Article.defaultProps = {date: "January 1, 1970"}

function Article({title, date, preview, minutes}) {
    const listEmojis = (minutes) => {
        const emoji = minutes < 30 ? "☕️" : "🍱"
        const lessThanThirty = Math.ceil(minutes/5)
        const greaterThanThirty = Math.ceil(minutes/10)

        const emojiAmount = minutes < 30 ? lessThanThirty : greaterThanThirty
        return emoji.repeat(emojiAmount)
    }

    const displayEmojis = listEmojis(minutes)

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} - {displayEmojis}</small>
            <p>{preview}</p>
        </article>
    )
}


export default Article