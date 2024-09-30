<script setup>
import { onMounted } from 'vue'
/* import useTrack from "../../composables/track" */
/* 
const {getTrack, album, track, image, errorsAlbum} = useTrack(); */



/* onMounted(()=>{ 
    getTrack();
})
 */
</script>

<template>
    <main class="h-full w-full relative flex flex-col justify-start pt-20 pb-10 overflow-hidden"><!-- dark:bg-secundary-buttonlagout -->
        <div class="flex flex-row ml-12">
            <div class="order-1 left-0 flex flex-row space-x-1 opacity-0 transform transition-transform duration-500 ease-in-out -translate-x-full animate-slite-vertical">
                <div class="w-[0.7rem] h-full bg-primary-butonBack"/>
                <div class="w-[0.2rem] h-full bg-primary-butonBack"/>
            </div>
            <div class="order-2 flex justify-center items-center">
                <div class="z-20 items-center index_beams__yWcJT grid grid-cols-3 gap-y-1 justify-center w-8/12">
                    <div class="col-span-3 text-lg w-full bg-primary-butonBack text-primary-buttonText h-10 px-4 space-x-1 flex justify-start items-center">
                        <div class="p-1 text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                            
                        </div>
                        <div>Nicolas Ramos: Software Developer</div>
                    </div>
                    <div class="order-1 w-full h-full z-20 flex justify-center items-center">
                        <img src="../../../public/photo_down.png" class="image-render-pixel items-center object-fill w-64 h-full" alt="">
                    </div>
                    <div class="order-2 col-span-2 z-20 flex flex-col space-y-4">
                        <div class="text-justify">
                            <p>
                                Systems Engineer dedicated to Web Development. My experience is summarized in the development of applications using the MVC pattern and Microservices architecture. I seek to apply best practices in the development of new technologies, with training and self-taught learning.
                            </p>
                        </div>
                        <div class="order-1 grid grid-cols-3 mt-2 gap-x-2">
                            <div class="order-1 relative">
                                <div class="order-3 button_over cursor-pointer">
                                    <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText">
                                        <a href="https://www.linkedin.com/in/nicolas-andres-ramos-leiva-b34b3a121/" class="w-full h-full">
                                            <button 
                                            class="relative group inline-block px-2 overflow-hidden w-full hover:shadow-sm hover:h-[2.1rem]  hover:shadow-gray-500 items-center text-left h-8 text-primary-buttonText bg-primary-butonBack btn-menu hover:text-primary-default cursor-pointer">
                                            
                                                <div class="absolute text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText  group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin w-5 h-5">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                                        <path d="M8 11l0 5" />
                                                        <path d="M8 8l0 .01" /><path d="M12 16l0 -5" />
                                                        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                                    </svg>
                                                </div>
                                                <span class="ml-6 ">Linkedin</span>
                                            </button>
                                        </a>
                                    </label>
                                </div>
                            </div>
                            <div class="order-2 relative">
                                <div class="order-1 button_over cursor-pointer">
                                    <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText">
                                        <a href="https://github.com/Nicolazo0525" class="w-full h-full">
                                            <button 
                                            class="relative group inline-block px-2 overflow-hidden w-full hover:shadow-sm hover:h-[2.1rem]  hover:shadow-gray-500 items-center text-left h-8 text-primary-buttonText bg-primary-butonBack btn-menu hover:text-primary-default cursor-pointer">
                                            
                                                <div class="absolute text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText  group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-github w-5 h-5">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
                                                    </svg>
                                                </div>
                                                <span class="ml-6 ">GitHub</span>
                                            </button>
                                        </a>
                                    </label>
                                </div>
                            </div>
                            <div class="order-3 relative">
                                <div class="order-3 button_over cursor-pointer">
                                    <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText">
                                        <a href="mailto:nicolandres1.nr@gmail.com" class="w-full h-full">
                                            <button 
                                            class="relative group inline-block px-2 overflow-hidden w-full hover:shadow-sm hover:h-[2.1rem]  hover:shadow-gray-500 items-center text-left h-8 text-primary-buttonText bg-primary-butonBack btn-menu hover:text-primary-default cursor-pointer">
                                            
                                                <div class="absolute text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText  group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-mail w-5 h-5">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" /><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
                                                    </svg>
                                                </div>
                                                <span class="ml-6 ">Email</span>
                                            </button>
                                        </a>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="order-2 grid grid-cols-2 mt-2 gap-x-2">
                            <div class="order-1 button_over cursor-pointer">
                                <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText">
                                    <a href="https://nicolasramos9.wordpress.com/wp-content/uploads/2023/12/cv_nicolasandresramosleiva.pdf" class="w-full h-full">
                                        <button 
                                        class="relative group inline-block px-2 overflow-hidden w-full hover:shadow-sm hover:h-[2.1rem]  hover:shadow-gray-500 items-center text-left h-8 text-primary-buttonText bg-primary-butonBack btn-menu hover:text-primary-default cursor-pointer">
                                        
                                            <div class="absolute text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText  group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-license w-5 h-5">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                                    <path d="M9 7l4 0" />
                                                    <path d="M9 11l4 0" />
                                                </svg>
                                            </div>
                                            <span class="ml-6 ">Download CV in Spanish</span>
                                        </button>
                                    </a>
                                </label>
                            </div>
                            <div class="order-2 button_over cursor-pointer">
                                <label for="Skill" class="hover:border-y-2 py-2 border-primary-buttonText">
                                    <a href="https://nicolasramos9.wordpress.com/wp-content/uploads/2023/12/cv_nicolasandresramosleiva_english.pdf" class="w-full h-full">
                                        <button 
                                        class="relative group inline-block px-2 overflow-hidden w-full hover:shadow-sm hover:h-[2.1rem]  hover:shadow-gray-500 items-center text-left h-8 text-primary-buttonText bg-primary-butonBack btn-menu hover:text-primary-default cursor-pointer">
                                        
                                            <div class="absolute text-primary-default group-hover:text-primary-buttonText bg-primary-buttonText  group-hover:bg-primary-default w-5 h-5 items-center top-[0.40rem]">
                                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-license w-5 h-5">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                                    <path d="M9 7l4 0" />
                                                    <path d="M9 11l4 0" />
                                                </svg>
                                            </div>
                                            <span class="ml-6 ">Download CV in English</span>
                                        </button>
                                    </a>
                                </label>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute w-full bottom-14 z-50">
            <div class="relative h-12 mt-7 ml-12 mr-12">
                <div class="absolute bottom-2 right-2 z-30 text-primary-bgLayoutLeft border border-primary-buttonText bg-primary-buttonText w-[0.70rem] h-[0.70rem] items-center">
                </div>
                <div class="absolute top-0 left-0 w-[99.8%] h-[2.8rem] bg-primary-bgLayoutLeft z-20 text-primary-bgLayoutLeft flex justify-between">
                    <div class="order-1 flex justify-start space-x-7 items-center">
                        <div class="flex flex-row space-x-1">
                            <div class="w-[0.7rem] h-[2.8rem] bg-[#4C4840]"/>
                            <div class="w-[0.2rem] h-[2.8rem] bg-[#4C4840]"/>
                        </div>
                        <div class="items-center text-[#4C4840]">
                        My portfolio is under development, so there may be interface errors on certain screen sizes.
                        </div>
                    </div>
                    <!-- <div class="order-2 flex flex-row items-center space-x-1 mr-7">
                        <div class="w-10 h-6 rounded-md bg-[#4C4840] text-primary-bgLayoutLeft text-center items-center">
                            <div class="w-full h-full flex justify-center items-center">
                                <div class="w-8 h-5 flex justify-center text-center items-center text-sm"><p class="text-center">ESC</p></div>
                            </div>
                        </div>
                        <div class="text-[#4C4840]">
                        Back
                        </div>
                    </div> -->
                </div>
                <div class="absolute top-[0.2rem] left-[0.15rem] z-10 bg-secundary-boxColorBack w-[99.8%] h-[2.8rem]"/>
            </div>
        </div>
    </main>
    
</template>

<style>

</style>