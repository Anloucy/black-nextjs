import { NextPage } from "next";
import Head from "next/head";
import Header from "../src/components/Header"
import { Container } from "reactstrap";
import CartTable from "@/components/CartTable";
import CartTotal from "@/components/CartTota";

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Meu carrinho de compras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main>
        <Container>
          <h1 className="mb-5">
            Carrinho
          </h1>

          <CartTable/>
          <CartTotal/>
        </Container>
      </main>
    </>
  )
}

export default Cart