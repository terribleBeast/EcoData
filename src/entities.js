import { Biotech, PeopleAlt, Grass, LocationOn, Assignment, ImageSearch } from '@mui/icons-material';
import Research from '../src/components/pages/Research'
import Analyzer from './components/pages/Analyzer';


export const entities = [
    {
        name: "Исследования",
        link: "researches",
        icon: <Assignment />,
        page: <Research />
    },
    {
        name: "Исследователи",
        link: "researchers",
        icon: <PeopleAlt />,
    },
    {
        name: "Растения",
        link: "plants",
        icon: <Grass />
    },
    {
        name: "Анализатор",
        link: 'analyzer',
        icon: <ImageSearch />,
        page: <Analyzer />
    },
    {
        name: "Локации",
        link: "locations",
        icon: <LocationOn />
    },
    {
        name: "Лаборатории",
        link: "laboratories",
        icon: <Biotech />
    },
]