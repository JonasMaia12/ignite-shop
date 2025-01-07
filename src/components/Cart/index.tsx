import * as Dialog from "@radix-ui/react-dialog"

import { CartButton } from "../CartButton"
import {
  CartClose,
  CartContent,
  CartFinalization,
  CartFinalizationDetails,
  CartProduct,
  CartProductDetails,
  CartProductImage,
} from "./styles"
import { X } from "phosphor-react"
import Image from "next/image"

export function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>

          <h2>Sacola de compras</h2>

          <section>
            {/* <p>Parece que seu carrinho está vazio :(</p> */}

            <CartProduct>
              <CartProductImage>
                <Image src="/preview.svg" width={100} height={93} alt="" />
              </CartProductImage>
              <CartProductDetails>
                <p>Produto 1</p>
                <strong>R$ 50.90</strong>
                <button>Remover</button>
              </CartProductDetails>
            </CartProduct>
          </section>

          <CartFinalization>
            <CartFinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>2 itens</p>
              </div>
              <div>
                <span>Valor total</span>
                <p>R$ 101.80</p>
              </div>
            </CartFinalizationDetails>
            <button>Finalizar compra</button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
