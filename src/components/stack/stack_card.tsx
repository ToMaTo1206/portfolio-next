import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

type StackProps = {
    faIcon: IconDefinition;
    children?: React.ReactNode;
}
export default function StackCard({ children, faIcon }: StackProps) {
    return(
        <div className="badge badge-soft badge-info border-primary/80 text-primary">
            <FontAwesomeIcon icon={faIcon} />
            {children}
        </div>
        )
}