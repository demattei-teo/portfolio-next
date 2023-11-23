import { InfoCardProps } from '@/components/cards/InfoCard'
import { FooterProps } from '@/components/footer/Footer'
import { HeroProps } from '@/components/hero/Hero'
import { HeaderProps } from '@/components/nav-bar/Header'

interface HomeType {
  header: HeaderProps
  hero: HeroProps
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

  footer: FooterProps
}

export interface DictionaryType {
  home: HomeType
  proyects: ProyectsType
}
