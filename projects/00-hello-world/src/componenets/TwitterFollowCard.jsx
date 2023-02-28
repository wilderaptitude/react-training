export function TwitterFollowCard ({name, nickname}) {
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="avatar" src={`https://unavatar.io/${nickname}`} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{nickname}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button is-following'>Follow</button>
            </aside>
        </article>
    )
}