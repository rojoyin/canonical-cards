export const PostCard = (props) => {
    const { post } = props;
    const { _embedded } = post;

    return (
        <div className={"col-4 p-card--highlighted"}
             style={
                 {
                     marginTop: "1rem",
                     boxShadow: "0 1px 1px 0 rgb(0 0 0 / 50%), 0 2px 2px -1px rgb(0 0 0 / 50%), 0 0 3px 0 rgb(0 0 0 / 90%)",
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "space-between",
                 }}>

            <header className="p-card__header">
                <h5 className={"p-muted-heading u-no-margin--bottom u-align-text--left"} style={
                    {
                        marginTop: "1%",
                        paddingLeft: "5%",
                    }
                }>
                    {_embedded["wp:term"][1][0].name}
                </h5>
            </header>
            <div className="p-card__content" style={
                {
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}>
                <div className="u-crop--16-9">
                    <a href={post.link}>
                        <div>
                            <img
                                src={post.featured_media}
                                alt={_embedded["wp:featuredmedia"]?.[0].alt_text}
                                style={
                                    {
                                        paddingTop: "5%",
                                        width: "90%",
                                    }}/>
                        </div>
                    </a>
                </div>
                <h3 className="p-heading--4 u-align-text--left" style={{paddingLeft:"5%"}}>
                    <a href={post.link}>
                        {post.title.rendered}
                    </a>
                </h3>
                <p className="u-align-text--left" style={{paddingLeft:"5%"}}>
                    <em>
                        By <a href={_embedded.author[0].link}>{_embedded.author[0].name}</a>
                         on {new Date(post.date).toDateString()}
                    </em>
                </p>
            </div>
            <p className="p-card__footer"
               style={
                   {
                       paddingLeft:"5%",
                       borderTopWidth: "1px",
                       borderTopStyle: "dotted",
                       borderTopColor: "rgb(217,217,217)",
                       textAlign: "left",
                   }}>
                {post.type}
            </p>
        </div>
    )
}