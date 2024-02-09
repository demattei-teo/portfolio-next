import { InfoCardProps } from '@/components/cards/InfoCard'
import { ReviewCardProps } from '@/components/cards/ReviewCard'
import { FooterProps } from '@/components/footer/Footer'
import { HeroProps } from '@/components/hero/Hero'
import { HeaderProps } from '@/components/nav-bar/Header'

interface HomeType {
  header: HeaderProps
  hero: HeroProps
  reviews: ReviewCardProps[]
  footer: FooterProps
}

interface ProyectsType {
  mova: {
    proyectCard: InfoCardProps
    srcImg: string
  }
  lotTodo: {
    proyectCard: InfoCardProps
    srcImg: string
  }
  rodaroArchitects: {
    proyectCard: InfoCardProps
    srcImg: string
  }
  lawyer: {
    proyectCard: InfoCardProps
    srcImg: string
  }
  nfthub: {
    proyectCard: InfoCardProps
    srcImg: string
  }
  teachit: {
    proyectCard: InfoCardProps
    srcImg: string
  }

  footer: FooterProps
}

export interface DictionaryType {
  home: HomeType
  proyects: ProyectsType
}
