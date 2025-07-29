// fellows-delta-deep-dive-main/src/components/DiscographySection.tsx

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music } from 'lucide-react';
import coverBluesRecording from '@/assets/album-blues-recording.jpg';
import coverSesionesDeltaVol3 from '@/assets/album-sesiones-delta-vol-3.jpg';
import coverTheConquerOfTheMoon from '@/assets/album-the-conquer-of-the-moon.jpg';
import coverGuadarrama from '@/assets/album-guadarrama.jpg';
import coverSesionesDelta from '@/assets/album-sesiones-delta.jpg';
import coverAfterSaturn from '@/assets/album-after-saturn.jpg';

const albums = [
  {
    title: "Blues Recording",
    year: "2025",
    description: "Un regreso crudo a la raíz, grabado en una sola noche en Estudio Meridiano. Blues eléctrico de altos vuelos.",
    cover: coverBluesRecording,
    bandcampUrl: "#"
  },
  {
    title: "Sesiones Delta Vol. 3",
    year: "2021", 
    description: "Guitarra, armónica y voz, sin trampa ni cartón. Una sesión directa al alma desde La Leñera.",
    cover: coverSesionesDeltaVol3,
    bandcampUrl: "#"
  },
  {
    title: "Guadarrama",
    year: "2019",
    description: "Un álbum conceptual que explora los paisajes sonoros de la sierra, fusionando blues y folk.",
    cover: coverGuadarrama,
    bandcampUrl: "#"
  },
  {
    title: "Sesiones Delta",
    year: "2018",
    description: "El inicio de las sesiones. Blues en estado puro, grabado en directo desde el local de ensayo.",
    cover: coverSesionesDelta,
    bandcampUrl: "#"
  },
  {
    title: "The Conquer of the Moon",
    year: "2016",
    description: "Un viaje sonoro por territorios del blues, el folk y el minimalismo eléctrico.",
    cover: coverTheConquerOfTheMoon,
    bandcampUrl: "#"
  },
  {
    title: "After Saturn",
    year: "2014",
    description: "Los primeros sonidos de la banda, con un toque más psicodélico y experimental.",
    cover: coverAfterSaturn,
    bandcampUrl: "#"
  }
];

// ... el resto del componente permanece igual
