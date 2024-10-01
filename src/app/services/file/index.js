

import { getResponse } from "@/app/services/api";

export const getFile = async (filename) => {
    try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaGFuQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyNzczMDEwMCwiZXhwIjoxNzI3ODE2NTAwfQ.xFsXHX5fciyZ3A8TbMTfP4ZMdArT3Wa25aEzbC7q_5M';

        const url = 'filesDirectory/' + filename;
        const response = await getResponse(url, {
            responseType: 'blob',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        const fileURL = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
        return fileURL;

    } catch (error) {
        console.error('Error al obtener el archivo', error);
    }
};
