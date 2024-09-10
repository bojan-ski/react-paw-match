const FooterRights = () => {
    const year = new Date().getFullYear()

    return (
        <section className="text-center text-white">
            <p className="mb-0">
                &copy; {year} BPdevelopment. Sva prava su zadržana.
            </p>
        </section>
    )
}

export default FooterRights