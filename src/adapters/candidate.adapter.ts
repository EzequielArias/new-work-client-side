import { AccoundCardParams, CandidateTypeAdapter } from "../interfaces"

export const CandidateAdapter = (candidates : CandidateTypeAdapter[]) : AccoundCardParams[] => {

    return candidates.map(p => {
        let adapted : AccoundCardParams = {
            id : p.id,
            workExperience : p.workplace,
            academic : p.academic,
            name : p.name,
            coverLetter : p.coverLetter,
            subtitle : p.subtitle,
            image : p.image
        }
        return adapted
    })
}