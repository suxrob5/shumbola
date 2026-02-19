"use client"

import AnimatedContent from "@/components/AnimatedContent"




const Home = () => {
    return (
        <div>
            <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={1}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0}
            >
                <div>Content to Animate</div>
            </AnimatedContent>
        </div>
    )
}

export default Home