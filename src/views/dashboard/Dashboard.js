import React from 'react'

import {
  CCard,
  CCardHeader,
} from '@coreui/react'

import {ccard, ccardHeader} from "src/views/dashboard/index.style";

const Dashboard = () => {

  return (
    <>

        <CCard style = {ccard}>
          <CCardHeader style = {ccardHeader}>Şifrelemenin Önemi</CCardHeader>

          Günümüzde kriptoloji, dijital dünyadaki veri güvenliği için vazgeçilmez bir teknolojidir. Bankacılık, e-ticaret, sağlık hizmetleri ve devlet kurumları gibi alanlarda, bireylerin ve kurumların gizliliğini korumak amacıyla kriptografik yöntemler yaygın olarak kullanılmaktadır.
          Özellikle asimetrik şifreleme ve açık anahtar şifreleme gibi teknikler, modern iletişim sistemlerinde bilgiyi güvence altına almak için kullanılır. Bu yöntemler, kişisel bilgilerin gizliliğini korurken aynı zamanda internet üzerinden güvenli işlemler yapılmasına da olanak tanır.
          Kriptoloji ayrıca, siber saldırılar karşısında koruma sağlamada büyük bir rol oynar. Siber güvenlik alanında, saldırganların hassas verilere erişimini engellemek ve veri bütünlüğünü sağlamak için güçlü şifreleme algoritmaları kullanılmaktadır.</CCard>
    </>
  )
}

export default Dashboard
