import * as S from './HikeSearchForm.Styled';
import Select from '../Select/Select';
import { Button } from '../Button/Button';
import { BottomArrowIcon } from '../Icons/BottomArrowIcon';
import { CalendarIcon } from '../Icons/CalendarIcon';
import IconedInput from '../IconedInput/IconedInput';

type Props = {
    className?: string;
};

const HikeSearchForm = ({ className }: Props) => {
    return (
        <S.HikeSearchFormStyled className={className}>
            <Select
                title="Локации для тура"
                description="выберите из списка"
                icon={<BottomArrowIcon />}
            />
            <IconedInput
                title="Дата похода"
                description="укажите диапазон"
                icon={<CalendarIcon />}
            />
            <Select
                title="Участники"
                description="минимум 4 человека"
                icon={<BottomArrowIcon />}
            />
            <div>
                <Button title="Найти программу" color="#1A3E3E" large />
            </div>
        </S.HikeSearchFormStyled>
    );
};

export default HikeSearchForm;