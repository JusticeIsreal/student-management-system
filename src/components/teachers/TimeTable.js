import { Table } from '@mantine/core';

const TimeTable = () => {
    const timeTableData = [
        { pr1: "English", pr2: "English", pr3: "English", pr4: "English" , pr5: "English" },
        { pr1: "Maths", pr2: "English", pr3: "English", pr4: "English" , pr5: "English" },
        { pr1: "Physics", pr2: "English", pr3:"English", pr4: "English" , pr5: "English" },
        { pr1: "Chemistry", pr2: "English", pr3: "English", pr4: "English" , pr5: "English" },
        { pr1: "Geography", pr2: "English", pr3: "English", pr4: "English" , pr5: "English" },
      ];
    const rows = timeTableData.map((element,index) => (
        <tr key={element.index}>
          <td>{element.pr1}</td>
          <td>{element.pr2}</td>
          <td>{element.pr3}</td>
          <td>{element.pr4}</td>
          <td>{element.pr5}</td>
        </tr>
      ));

    return (
        <div className='timetable_container'>
            <h3>Time Table</h3>
            <Table fontSize={"md"}>
                <thead>
                    <tr>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thur</th>
                        <th>Fri</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    )
}

export default TimeTable