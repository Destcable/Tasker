const Home = () => {
    return (
        <>
            <header className="d-flex justify-content-between p-4 align-items-center">
                <h5>Tasker</h5>
                <div className="d-flex align-items-center justify-content-center gap-4">
                    <a href="#" className="text-decoration-none active-link d-flex align-items-center">
                        <img src="./assets/icons/overview.svg" alt="overviewIcon" className="me-1 icon-small" />
                            Главная
                    </a>
                    <a href="#" className="text-decoration-none text-dark d-flex align-items-center">
                        <img src="./assets/icons/projects.svg" alt="projectsIcon" className="me-1 icon-small" />
                            Проекты
                    </a>
                    <a href="#" className="text-decoration-none text-dark d-flex align-items-center">
                        <img src="./assets/icons/employees.svg" alt="teamIcon" className="me-1 icon-small" />
                            Команда
                    </a>
                    <a href="#" className="text-decoration-none text-dark d-flex align-items-center">
                        <img src="./assets/icons/calendar.svg" alt="calendarIcon" className="me-1 icon-small" />
                            Календарь
                    </a>
                    <a href="#" className="text-decoration-none text-dark d-flex align-items-center">
                        <img src="./assets/icons/messages.svg" alt="calendarIcon" className="me-1 icon-small" />
                            Сообщения
                    </a>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <div className="bg-white p-2 pt-1 rounded-circle border border-dark">
                        <img src="./assets/icons/settings.svg" alt="settingsIcon" className=" icon-small" />
                    </div>
                    <div className="bg-white p-2 pt-1 pe-1 rounded-circle border border-dark">
                        <img src="./assets/icons/search.svg" alt="searchIcon" className="me-1 icon-small" />
                    </div>
                    <div className="bg-white p-2 pt-1 pe-1 rounded-circle border border-dark">
                        <img src="./assets/icons/profile.svg" alt="profileIcon" className="me-1 icon-small" />
                    </div>
                </div>
            </header>
            <section className="d-flex justify-content-between p-4 align-items-center">
                <div>
                    <h2>Главная</h2>
                    <span className="text-muted">Обзор всех своих проектов</span>
                </div>
                <div>
                    <button className="btn bg-orange text-dark ps-4 pe-4 rounded-pill border border-dark">Создать задачу</button>
                </div>
            </section>

            <section id="section-widgets" className="p-3 d-flex gap-3">
            </section>

            <section className="p-3">
                <div className="p-2 bg-white border border-dark">
                    <h5 className="">Сегодняшние задачи</h5>


                    <div className="d-flex border-bottom border-dark pb-3 pt-3 align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <div className="rounded-circle border border-dark p-3 me-3">
                                <img src="./assets/icons/phone.svg" alt="phoneIcon" style={{width: '27px'}} />
                            </div>
                            <div>
                                <h6>Созвон с командой разработки</h6>
                                <span className="text-muted">10:00-11:00</span>
                            </div>

                        </div>
                        <div>
                            <input className="form-check-input" type="radio" name="expressTask1" id="expressTask1" value="option1" />
                        </div>
                    </div>

                    <div className="d-flex border-bottom border-dark pb-3 pt-3 align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <div className="rounded-circle border border-dark p-3 me-3">
                                <img src="./assets/icons/phone.svg" alt="phoneIcon" style={{width: '27px' }} />
                            </div>
                            <div>
                                <h6>Созвон с командой разработки</h6>
                                <span className="text-muted">10:00-11:00</span>
                            </div>

                        </div>
                        <div>
                            <input className="form-check-input" type="radio" name="expressTask1" id="expressTask1" value="option1" />
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
};

export default Home;