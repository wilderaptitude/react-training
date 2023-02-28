import './App.css';

export function App () {
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="avatar" src="https://unavatar.io/wildergonzo" />
                <div className='tw-followCard-info'>
                    <strong>Wilder Gonzales</strong>
                    <span className='tw-followCard-infoUserName'>@wildergonzo</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button is-following'>Follow</button>
            </aside>
        </article>
    )
}