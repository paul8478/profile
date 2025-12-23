import { Button } from "./ui/button";
import "../css/contact.css";
export function ContactSection() {
  return (
    <section className="my-20 px-0 contact-bg" style={{ minHeight: "100vh" }}>
      <div className="w-full" style={{ minHeight: "200px" }}>
        {/* Animated text strip */}
      <div className="overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 py-4 mb-16">
        <div className="animate-scroll whitespace-nowrap text-white font-bold text-2xl md:text-4xl lg:text-6xl px-4 transform -rotate-2">
           DEVELOPER • MACHINE LEARNING • FRONTEND • BACKEND • DEVELOPER • MACHINE LEARNING • FRONTEND • BACKEND • 
         </div>
      </div>



        {/* Main content */}
        <div className=" p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-purple-200 text-sm uppercase tracking-wider mb-4">CONTACT ME</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-12">
              Ready to develop your next big thing?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="flex flex-col items-center mb-4">
                  {/* Discord Logo SVG */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 71 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-2"
                  >
                    <path
                      d="M60.104 4.552A58.864 58.864 0 0 0 46.852.8a.117.117 0 0 0-.124.06c-2.05 3.652-4.34 8.41-5.953 12.19-7.13-1.07-14.1-1.07-21.13 0-1.62-3.79-3.92-8.538-5.96-12.19A.117.117 0 0 0 13.14.8a58.96 58.96 0 0 0-13.26 3.752.105.105 0 0 0-.048.041C-1.607 18.73-2.91 32.66-.98 46.44a.12.12 0 0 0 .045.082c5.56 4.08 10.97 6.57 16.29 8.23a.12.12 0 0 0 .13-.042c1.25-1.72 2.36-3.53 3.32-5.43a.118.118 0 0 0-.065-.164c-1.78-.68-3.48-1.5-5.13-2.42a.117.117 0 0 1-.012-.195c.345-.26.69-.53 1.02-.8a.116.116 0 0 1 .12-.017c10.8 4.94 22.47 4.94 33.22 0a.116.116 0 0 1 .122.016c.33.27.675.54 1.02.8a.117.117 0 0 1-.011.195c-1.65.92-3.35 1.74-5.13 2.42a.118.118 0 0 0-.066.165c.96 1.89 2.07 3.7 3.32 5.43a.12.12 0 0 0 .13.042c5.33-1.66 10.74-4.15 16.3-8.23a.12.12 0 0 0 .045-.082c1.98-13.01.21-26.91-2.02-41.65a.105.105 0 0 0-.048-.041ZM23.725 37.28c-3.17 0-5.78-2.91-5.78-6.5 0-3.59 2.57-6.5 5.78-6.5 3.23 0 5.81 2.93 5.78 6.5 0 3.59-2.57 6.5-5.78 6.5Zm23.55 0c-3.17 0-5.78-2.91-5.78-6.5 0-3.59 2.57-6.5 5.78-6.5 3.23 0 5.81 2.93 5.78 6.5 0 3.59-2.55 6.5-5.78 6.5Z"
                      fill="#5865F2"
                    />
                  </svg>
                  <h3 className="text-xl font-bold">Discord</h3>
                </div>
                <p className="text-purple-200 mb-6">Let's chat on Discord</p>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full w-full">
                  Hit me up on Discord
                </Button>
              </div>
              
              <div className="text-center">
                <div className="flex flex-col items-center mb-4">
                  {/* LinkedIn Logo SVG */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-2"
                  >
                    <path
                      d="M20.447 20.452h-3.673v-5.579c0-1.333-.027-3.048-1.854-3.048-1.855 0-2.136 1.45-2.136 2.947v5.68h-3.673V9.293h3.52v1.563h.051c.489-.925 1.684-1.903 3.469-1.903 3.709 0 4.4 2.44 4.4 5.607v5.892h-.001zm-17.894-.001H.553V7.104h3.673v13.347zm1.836-15.75C2.658 4.702 0 7.36 0 10.5c0 3.14 2.658 5.798 5.389 5.798 2.731 0 5.389-2.658 5.389-5.798 0-3.14-2.658-5.798-5.389-5.798zm0 9.034c-1.888 0-3.389-1.501-3.389-3.389 0-1.888 1.501-3.389 3.389-3.389 1.888 0 3.389 1.501 3.389 3.389 0 1.888-1.501 3.389-3.389 3.389z"
                      fill="#0077B5"
                    />
                  </svg>
                  <h3 className="text-xl font-bold">LinkedIn</h3>
                </div>
                <p className="text-purple-200 mb-6">Business inquiries</p>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full w-full font-semibold">
                  Visit my LinkedIn
                </Button>
              </div>
            </div>
            
            {/* Character */}
            <div className="mt-8">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
          
          </div>
      </div>
    </section>
  );
}