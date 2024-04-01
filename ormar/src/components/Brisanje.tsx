
interface Props {
    onConfirm: () => void;
    onCancel: () => void;
}

const Brisanje: React.FC<Props> = ({ onConfirm, onCancel }) => {
    return (
        <div className="confirmation">
            <p>Jeste li sigurni da želite izbrisati proizvod?</p>
            <button onClick={onConfirm}>Da</button>
            <button onClick={onCancel}>Ne</button>
        </div>
    );
};

export default Brisanje;
