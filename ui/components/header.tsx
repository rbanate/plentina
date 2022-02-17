import Image from 'next/image'

const Header = () => {
  return (
    <section className="flex w-full bg-blue-500 ">
      <Image
        src="https://static.wixstatic.com/media/624f8b_6a76f6c184e34c509643bd3cb07f4942~mv2.png/v1/fill/w_512,h_200,al_c,q_85,usm_0.66_1.00_0.01/Plentina-PingFang_icn_horz_white.webp"
        width={256}
        height={100}
        alt="Plentina"
      ></Image>
    </section>
  )
}

export default Header
