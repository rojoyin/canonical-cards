export const PostCard = (props) => {
    const { post } = props;
    const { _embedded } = post;

    return (
        <div className={"col-4 p-card--highlighted"}>

            <header className="p-card__header">
                <h5 className={"p-muted-heading u-no-margin--bottom u-align-text--left"}>
                    {_embedded["wp:term"][1][0].name}
                </h5>
            </header>
            <div className="p-card__content">
                <div className="u-crop--16-9">
                    <a href={post.link}>
                        <div>
                            <img
                                src={post.featured_media}
                                alt={_embedded["wp:featuredmedia"]?.[0].alt_text}
                            />
                        </div>
                    </a>
                </div>
                <h3 className="p-heading--4 u-align-text--left">
                    <a href={post.link}>
                        {post.title.rendered}
                    </a>
                </h3>
                <p className="u-align-text--left">
                    <em>
                        By <a href={_embedded.author[0].link}>{_embedded.author[0].name}</a>
                        on {new Date(post.date).toDateString()}
                    </em>
                </p>
            </div>
            <p className="p-card__footer">
                {post.type}
            </p>
        </div>
    )
}