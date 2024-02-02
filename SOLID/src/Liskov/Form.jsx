import { useState } from 'react';

const TextInput = ({ value, onChange, label }) => {
    return (
        <label>
            {label}
            <input type="text" value={value} onChange={onChange} />
        </label>
    );
};

const NumberInput = ({ value, onChange, label }) => {
    const handleChange = (e) => {
        const newValue = e.target.value;
        onChange(newValue.replace(/[^0-9]/g, ''));
    };

    return (
        <label>
            {label}
            <input type="text" value={value} onChange={handleChange} />
        </label>
    );
};

const DateInput = ({ value, onChange, label }) => {
    return (
        <label>
            {label}
            <input type="date" value={value} onChange={onChange} />
        </label>
    );
};

// Los componentes NumberInput y DateInput están diseñados para ser utilizados
// en cualquier lugar donde un TextInput podría ser utilizado, siguiendo el mismo
// contrato (interfaz) de props. Esto significa que pueden ser intercambiados
// sin alterar la funcionalidad del componente que los consume.
//Esto facilita la extensión y el mantenimiento del código, permitiendo que
//el formulario se adapte fácilmente a nuevas necesidades sin requerir cambios
//significativos en la estructura existente.

export const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        birthDate: '',
    });

    const handleChange = (name) => (value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <form>
            <TextInput label="Nombre:" value={formData.name} onChange={(e) => handleChange('name')(e.target.value)} />
            <NumberInput label="Edad:" value={formData.age} onChange={(e) => handleChange('age')(e.target.value)} />
            <DateInput label="Fecha de Nacimiento:" value={formData.birthDate} onChange={(e) => handleChange('birthDate')(e.target.value)} />
            {/* Si es necesario actualizarlos a textinput lo podriamos realizar sin tener ningún inconveniente */}
            {/* <TextInput label="Fecha de Nacimiento:" value={formData.birthDate} onChange={(e) => handleChange('birthDate')(e.target.value)} /> */}
        </form>
    );
};
