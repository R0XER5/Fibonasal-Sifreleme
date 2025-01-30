import React from 'react';
import {
  CCard, CCardBody,
  CCardHeader, CCardText, CCardTitle, CListGroup, CListGroupItem,
} from '@coreui/react';
import { ShieldCheck, History } from "lucide-react";

const CryptologyCard = ({ title, description, items, icon: Icon }) => (
  <CCard className="mb-3 shadow-lg">
    <CCardHeader className="bg-primary text-white d-flex align-items-center">
      <CCardTitle className="m-0">{title}</CCardTitle>
    </CCardHeader>
    <CCardBody>
      <CCardText>{description}</CCardText>
      <CListGroup>
        {items.map((item, index) => (
          <CListGroupItem key={index}>
            <strong>{item.title}:</strong> {item.content}
          </CListGroupItem>
        ))}
      </CListGroup>
    </CCardBody>
  </CCard>
);

const Dashboard = () => {
  const modernCryptology = {
    title: "Kriptolojinin Önemi",
    description: "Kriptoloji, modern dünyada hem bireysel hem de toplumsal düzeyde kritik bir öneme sahiptir. İşte bazı temel noktalar:",
    items: [
      { title: "Bilgi Güvenliği", content: "Hassas verilerin korunmasını sağlar; örneğin, çevrimiçi alışverişlerde SSL/TLS kullanılır." },
      { title: "Ulusal Güvenlik", content: "Devletler, askeri ve diplomatik iletişimlerini gizli tutmak için kullanır." },
      { title: "Dijital Ekonomi", content: "Kripto paralar, tamamen kriptografi prensiplerine dayanır." },
      { title: "Kişisel Mahremiyet", content: "Mesajlaşma uygulamaları ve sosyal medya platformları için kritik bir araçtır." },
      { title: "Bilim ve Teknoloji Gelişimi", content: "Kuantum kriptografi gibi alanlarda yenilikleri teşvik eder." }
    ],
    icon: ShieldCheck
  };

  const historyCryptology = {
    title: "Kriptolojinin Tarihteki Önemi",
    description: "Kriptoloji, tarih boyunca medeniyetlerin kaderini etkileyen kritik bir araç olmuştur. İşte tarihteki önemli yerlerinden bazıları:",
    items: [
      { title: "Antik Çağ", content: "Kriptoloji, antik Mısır ve Yunanistan'da diplomatik ve askeri iletişimde kullanılmıştır. Örneğin, Spartalıların 'Scytale' adı verilen bir şifreleme aracı mevcuttu." },
      { title: "Orta Çağ", content: "İslam alimleri, özellikle El-Kindi, kriptolojinin teorik temellerini atmış ve frekans analizi yöntemini geliştirmiştir." },
      { title: "II. Dünya Savaşı", content: "Enigma makinesi gibi cihazlar, savaşın seyrini belirleyen kritik faktörlerden biri olmuştur. Alan Turing'in Enigma'yı çözmesi, Müttefiklerin zaferinde büyük rol oynamıştır." },
      { title: "Soğuk Savaş", content: "Kriptoloji, casusluk ve istihbarat faaliyetlerinin temel taşlarından biri olmuştur. ABD'nin 'Venona Projesi' bu dönemde öne çıkmıştır." },
      { title: "Modern Dönem", content: "Tarihsel temeller üzerine inşa edilen modern kriptoloji, dijital dünyada veri güvenliği ve mahremiyetin anahtarı olmuştur." }
    ],
    icon: History
  };

  return (
    <>
      <CryptologyCard {...modernCryptology} />
      <CryptologyCard {...historyCryptology} />
    </>
  );
};

export default Dashboard;
