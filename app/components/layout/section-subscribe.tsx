"use client";
import { useState, useCallback, memo } from "react";
import clsx from "clsx";
import Section from "@/app/components/main/section";
import styles from "@/app/styles/main/section-subscribe.module.scss";

export default memo(function SectionSubscribe() {
    const [message, setMessage] = useState(false);
    const [emailInput, setEmailInput] = useState("");
    const [genderRadio, setGenderRadio] = useState<string | null>(null);

    const handleEmailInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmailInput(e.target.value);
        },
        []
    );

    const handleGenderRadio = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setGenderRadio(e.target.value);
        },
        []
    );

    const handleMessage = useCallback(() => {
        if (emailInput === "") {
            setMessage(true);
        } else {
            setMessage(false);
        }
    }, [emailInput]);

    return (
        <Section sectionClass={"subscribe"}>
            <div className={clsx(styles["subscribe"])}>
                <div className={clsx(styles["subscribe__inner"])}>
                    <div className={clsx(styles["subscribe__left"])}>
                        <div className={clsx(styles["subscribe__title"])}>
                            <h2>SIGN UP FOR BALMAIN UPDATES</h2>
                            <p>
                                Be in the know about what&apos;s happening at
                                the Parisian Maison: never miss out on the
                                latest trends, newest collections and exciting
                                special projects from Balmain.
                            </p>
                        </div>
                        <div className={clsx(styles["subscribe__announce"])}>
                            <p>
                                Pierre Balmain processes the data collected to
                                send you our newsletter. To find out more about
                                how we manage your personal data and to exercise
                                your rights, please refer to our privacy policy.
                            </p>
                            <p>
                                *Mandatory information: If you choose not to
                                give your consent for the collection of
                                mandatory data you will not be able to subscribe
                                to the newsletter.
                            </p>
                        </div>
                    </div>
                    <div className={clsx(styles["subscribe__right"])}>
                        <div className={clsx(styles["subscribe__gender"])}>
                            <h3>Gender *</h3>
                            <div className={clsx(styles["subscribe__radio"])}>
                                <ul>
                                    <li>
                                        <input
                                            type="radio"
                                            name="gender"
                                            id="female"
                                            checked={genderRadio === "female"}
                                            value="female"
                                            onChange={handleGenderRadio}
                                        />
                                        <label htmlFor="female">Female</label>
                                    </li>
                                    <li>
                                        <input
                                            type="radio"
                                            name="gender"
                                            id="male"
                                            checked={genderRadio === "male"}
                                            value="male"
                                            onChange={handleGenderRadio}
                                        />
                                        <label htmlFor="male">Male</label>
                                    </li>
                                    <li>
                                        <input
                                            type="radio"
                                            name="gender"
                                            id="fluid"
                                            checked={genderRadio === "fluid"}
                                            value="fluid"
                                            onChange={handleGenderRadio}
                                        />
                                        <label htmlFor="fluid">Fluid</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={clsx(styles["subscribe__signup"])}>
                            <h3>Email sign-up*</h3>
                            <div className={clsx(styles["subscribe__email"])}>
                                <form action="">
                                    <div
                                        className={clsx(
                                            styles["subscribe__wrap"]
                                        )}
                                    >
                                        <input
                                            type="text"
                                            value={emailInput}
                                            onChange={handleEmailInput}
                                            placeholder="Email"
                                            onBlur={handleMessage}
                                            className={clsx(
                                                styles["subscribe__input"],
                                                {
                                                    [styles[
                                                        "subscribe__input--red"
                                                    ]]: message,
                                                }
                                            )}
                                        />
                                        <p
                                            style={
                                                message
                                                    ? { display: "block" }
                                                    : { display: "none" }
                                            }
                                        >
                                            Please check your Email
                                        </p>
                                    </div>
                                    <button type="submit">
                                        <span>SUBSCRIBE</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
});
