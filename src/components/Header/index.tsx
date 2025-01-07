import Image from "next/image"
import Link from "next/link"

import logoImg from "../../assets/logo.svg"
import { HeaderContainer } from "./styles"
import { Cart } from "../Cart"
import { useRouter } from "next/router"

export function Header() {
  const { pathname } = useRouter()

  const showCartButton = pathname !== "/success"

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg.src} alt="" width={130} height={52} />
      </Link>
      {showCartButton && <Cart />}
    </HeaderContainer>
  )
}
