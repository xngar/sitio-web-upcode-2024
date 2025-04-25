export const sendMail = async (emailData) => {
    try {
        const response = await fetch('https://services.upcode.cl/api/Mail/Notification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData)
        });

        if (!response.ok) {
            throw new Error('Error en el envío del correo');
        }

        return response;
    } catch (error) {
        console.error('Error en el servicio de correo:', error);
        throw error;
    }
};


