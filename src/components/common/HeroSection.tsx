
type HeroSectionProps = {
    image: string;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    overlayClass?: string;
    contentPosition?: string;
    contentClass?: string;
    height?: string;
};

const HeroSection = ({
    image,
    title,
    subtitle,
    overlayClass = "bg-overlay",
    contentPosition = "items-end",
    contentClass = "",
    height = "h-96"
}: HeroSectionProps) => {
    return (
        <section className={`relative overflow-hidden ${height}`}>

            {/* Background */}
            <img
                src={image}
                className="absolute inset-0 w-full h-full object-cover"
                alt="hero"
            />

            {/* Overlay */}
            <div className={`absolute inset-0 ${overlayClass}`} />

            {/* Content */}
            <div
                className={`relative container py-16 h-full flex ${contentPosition}`}
            >
                <div className={`max-w-2xl ${contentClass}`}>
                    {subtitle && (
                        <p className="text-lg text-gray-200 mb-2">
                            {subtitle}
                        </p>
                    )}

                    <div>{title}</div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;