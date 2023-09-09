export interface WorkOrEducationInterface {
    id : string
    end : Date | null;
    start : Date | null;
    description : string;
    institution : string;
}

export interface AchievementSlotParams {
    title : string;
    height : string;
    iterableData : WorkOrEducationInterface[];
    setModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ResumeSlotParams {
    initialForm : WorkOrEducationInterface;
    command : string;
    title : string;
}

export interface ExperiencesState {
    workExperience : WorkOrEducationInterface[];
    academic : WorkOrEducationInterface[];
}