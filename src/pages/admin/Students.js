import TopBar from "../../components/admin/TopBar"
import DataTable from "react-data-table-component";
import { RiFilter3Fill } from "react-icons/ri"
import { Popover, Modal, Slider, Checkbox, Radio } from "@mantine/core";

const Students = () => {

    const tableColumns = [
        {
            name: "First name",
            sortable: true,
        },
        {
            name: "Last name",
            sortable: true,
        },
        {
            name: "Department",
        },
        {
            name: "Gender",
            sortable: true,
        },
    ];

    const MARKS = [
        { value: 100, label: '100 level' },
        { value: 200, label: '200 level' },
        { value: 300, label: '300 level' },
        { value: 400, label: '400 level' },
        { value: 500, label: '500 level' },
    ];


    return (
        <div>

            <TopBar pageName={"Students"} />
            <div className="app_container">
                <div className="students_container">

                    <Popover withArrow shadow="md" width={400}>
                        <Popover.Target>
                            <button className="filter_sign"><RiFilter3Fill />Filter</button>
                        </Popover.Target>
                        <Popover.Dropdown>
                            <div className="filter_container">
                                <h4>Level</h4>
                                <Slider
                                    onChange={(e) => console.log(e)}
                                    label={(val) => MARKS.find((mark) => mark.value === val).label}
                                    defaultValue={100}
                                    step={100}
                                    marks={MARKS}
                                    max={500}
                                    min={100}
                                    styles={{ markLabel: { display: 'none' } }}
                                />
                            </div>

                            <div className="filter_container">
                                <Checkbox.Group
                                    label={<h3>Department</h3>}
                                >
                                    <div className="filter_checkbox_container">
                                        <Checkbox value="computer science" label="Computer science" />
                                        <Checkbox value="software engineering" label="Software engineering" />
                                    </div>
                                </Checkbox.Group>
                            </div>

                            <div className="filter_container">
                                <Radio.Group
                                    label={<h3>Gender</h3>}
                                    name={"gender"}
                                >
                                    <div className="filter_checkbox_container">
                                        <Radio value="male" label="Male" />
                                        <Radio value="female" label="Female" />
                                    </div>
                                </Radio.Group>
                            </div>

                        </Popover.Dropdown>

                    </Popover>

                    <div className="main">
                        <DataTable
                            columns={tableColumns}
                            data={[{}, {}]}
                            pagination
                            noHeader
                            defaultSortField="id"
                            defaultSortAsc={false}
                            highlightOnHover
                            selectableRows
                            fixedHeader
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Students