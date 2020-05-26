import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/button';

const CellDeleta = ({removeDados, id}) => {
    if(!removeDados) {
        return null;
    }
    return(
        <TableCell>
            <Button  variant="contained" color="primary" onClick={() => removeDados(id) }>Remover</Button>
        </TableCell>
    ); 
}

const TituloDeleta = ({removeDados}) => {
    removeDados ?  <TableCell>Deleta</TableCell> : '';
}

const Tabela = props => {
    const { campos, dados, removeDados } = props;
    return(
        <Table>
            <TableHead>
                <TableRow>
                    {campos.map((campo, index) => <TableCell key={index}>{campo.titulo}</TableCell>)}
                </TableRow>
            </TableHead>

            <TableBody>
                {dados.map(dado => (
                    <TableRow key={dado.id}>
                        {campos.map((campo, index) => <TableCell key={index}>{dado[campo.dado]}</TableCell>)}
                        <CellDeleta id={dados.id} removeDados={removeDados}/>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default Tabela;