# `spotinst_organization_programmatic_user`

Refer to the Terraform Registory for docs: [`spotinst_organization_programmatic_user`](https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user).

# `organizationProgrammaticUser` Submodule <a name="`organizationProgrammaticUser` Submodule" id="@cdktf/provider-spotinst.organizationProgrammaticUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationProgrammaticUser <a name="OrganizationProgrammaticUser" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user spotinst_organization_programmatic_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import organization_programmatic_user

organizationProgrammaticUser.OrganizationProgrammaticUser(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  accounts: typing.Union[IResolvable, typing.List[OrganizationProgrammaticUserAccounts]] = None,
  description: str = None,
  id: str = None,
  policies: typing.Union[IResolvable, typing.List[OrganizationProgrammaticUserPolicies]] = None,
  user_group_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#name OrganizationProgrammaticUser#name}. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.accounts">accounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts">OrganizationProgrammaticUserAccounts</a>]]</code> | accounts block. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#description OrganizationProgrammaticUser#description}. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#id OrganizationProgrammaticUser#id}. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.policies">policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies">OrganizationProgrammaticUserPolicies</a>]]</code> | policies block. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.userGroupIds">user_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#user_group_ids OrganizationProgrammaticUser#user_group_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#name OrganizationProgrammaticUser#name}.

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.accounts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts">OrganizationProgrammaticUserAccounts</a>]]

accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#accounts OrganizationProgrammaticUser#accounts}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#description OrganizationProgrammaticUser#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#id OrganizationProgrammaticUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.policies"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies">OrganizationProgrammaticUserPolicies</a>]]

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#policies OrganizationProgrammaticUser#policies}

---

##### `user_group_ids`<sup>Optional</sup> <a name="user_group_ids" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.userGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#user_group_ids OrganizationProgrammaticUser#user_group_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.putAccounts">put_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.putPolicies">put_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetAccounts">reset_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetPolicies">reset_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetUserGroupIds">reset_user_group_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_accounts` <a name="put_accounts" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.putAccounts"></a>

```python
def put_accounts(
  value: typing.Union[IResolvable, typing.List[OrganizationProgrammaticUserAccounts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.putAccounts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts">OrganizationProgrammaticUserAccounts</a>]]

---

##### `put_policies` <a name="put_policies" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.putPolicies"></a>

```python
def put_policies(
  value: typing.Union[IResolvable, typing.List[OrganizationProgrammaticUserPolicies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.putPolicies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies">OrganizationProgrammaticUserPolicies</a>]]

---

##### `reset_accounts` <a name="reset_accounts" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetAccounts"></a>

```python
def reset_accounts() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policies` <a name="reset_policies" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetPolicies"></a>

```python
def reset_policies() -> None
```

##### `reset_user_group_ids` <a name="reset_user_group_ids" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetUserGroupIds"></a>

```python
def reset_user_group_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import organization_programmatic_user

organizationProgrammaticUser.OrganizationProgrammaticUser.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import organization_programmatic_user

organizationProgrammaticUser.OrganizationProgrammaticUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import organization_programmatic_user

organizationProgrammaticUser.OrganizationProgrammaticUser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.accounts">accounts</a></code> | <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList">OrganizationProgrammaticUserAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList">OrganizationProgrammaticUserPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.accountsInput">accounts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts">OrganizationProgrammaticUserAccounts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.policiesInput">policies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies">OrganizationProgrammaticUserPolicies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.userGroupIdsInput">user_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.userGroupIds">user_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.accounts"></a>

```python
accounts: OrganizationProgrammaticUserAccountsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList">OrganizationProgrammaticUserAccountsList</a>

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.policies"></a>

```python
policies: OrganizationProgrammaticUserPoliciesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList">OrganizationProgrammaticUserPoliciesList</a>

---

##### `accounts_input`<sup>Optional</sup> <a name="accounts_input" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.accountsInput"></a>

```python
accounts_input: typing.Union[IResolvable, typing.List[OrganizationProgrammaticUserAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts">OrganizationProgrammaticUserAccounts</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.policiesInput"></a>

```python
policies_input: typing.Union[IResolvable, typing.List[OrganizationProgrammaticUserPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies">OrganizationProgrammaticUserPolicies</a>]]

---

##### `user_group_ids_input`<sup>Optional</sup> <a name="user_group_ids_input" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.userGroupIdsInput"></a>

```python
user_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `user_group_ids`<sup>Required</sup> <a name="user_group_ids" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.userGroupIds"></a>

```python
user_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationProgrammaticUserAccounts <a name="OrganizationProgrammaticUserAccounts" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import organization_programmatic_user

organizationProgrammaticUser.OrganizationProgrammaticUserAccounts(
  account_id: str,
  account_role: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#account_id OrganizationProgrammaticUser#account_id}. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts.property.accountRole">account_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#account_role OrganizationProgrammaticUser#account_role}. |

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#account_id OrganizationProgrammaticUser#account_id}.

---

##### `account_role`<sup>Required</sup> <a name="account_role" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts.property.accountRole"></a>

```python
account_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#account_role OrganizationProgrammaticUser#account_role}.

---

### OrganizationProgrammaticUserConfig <a name="OrganizationProgrammaticUserConfig" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import organization_programmatic_user

organizationProgrammaticUser.OrganizationProgrammaticUserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  accounts: typing.Union[IResolvable, typing.List[OrganizationProgrammaticUserAccounts]] = None,
  description: str = None,
  id: str = None,
  policies: typing.Union[IResolvable, typing.List[OrganizationProgrammaticUserPolicies]] = None,
  user_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#name OrganizationProgrammaticUser#name}. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.accounts">accounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts">OrganizationProgrammaticUserAccounts</a>]]</code> | accounts block. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#description OrganizationProgrammaticUser#description}. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#id OrganizationProgrammaticUser#id}. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.policies">policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies">OrganizationProgrammaticUserPolicies</a>]]</code> | policies block. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.userGroupIds">user_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#user_group_ids OrganizationProgrammaticUser#user_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#name OrganizationProgrammaticUser#name}.

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.accounts"></a>

```python
accounts: typing.Union[IResolvable, typing.List[OrganizationProgrammaticUserAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts">OrganizationProgrammaticUserAccounts</a>]]

accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#accounts OrganizationProgrammaticUser#accounts}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#description OrganizationProgrammaticUser#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#id OrganizationProgrammaticUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.policies"></a>

```python
policies: typing.Union[IResolvable, typing.List[OrganizationProgrammaticUserPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies">OrganizationProgrammaticUserPolicies</a>]]

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#policies OrganizationProgrammaticUser#policies}

---

##### `user_group_ids`<sup>Optional</sup> <a name="user_group_ids" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.userGroupIds"></a>

```python
user_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#user_group_ids OrganizationProgrammaticUser#user_group_ids}.

---

### OrganizationProgrammaticUserPolicies <a name="OrganizationProgrammaticUserPolicies" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import organization_programmatic_user

organizationProgrammaticUser.OrganizationProgrammaticUserPolicies(
  policy_account_ids: typing.List[str],
  policy_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies.property.policyAccountIds">policy_account_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#policy_account_ids OrganizationProgrammaticUser#policy_account_ids}. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies.property.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#policy_id OrganizationProgrammaticUser#policy_id}. |

---

##### `policy_account_ids`<sup>Required</sup> <a name="policy_account_ids" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies.property.policyAccountIds"></a>

```python
policy_account_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#policy_account_ids OrganizationProgrammaticUser#policy_account_ids}.

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.146.0/docs/resources/organization_programmatic_user#policy_id OrganizationProgrammaticUser#policy_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationProgrammaticUserAccountsList <a name="OrganizationProgrammaticUserAccountsList" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import organization_programmatic_user

organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrganizationProgrammaticUserAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts">OrganizationProgrammaticUserAccounts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OrganizationProgrammaticUserAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts">OrganizationProgrammaticUserAccounts</a>]]

---


### OrganizationProgrammaticUserAccountsOutputReference <a name="OrganizationProgrammaticUserAccountsOutputReference" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import organization_programmatic_user

organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountRoleInput">account_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountRole">account_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts">OrganizationProgrammaticUserAccounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `account_role_input`<sup>Optional</sup> <a name="account_role_input" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountRoleInput"></a>

```python
account_role_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `account_role`<sup>Required</sup> <a name="account_role" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountRole"></a>

```python
account_role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OrganizationProgrammaticUserAccounts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts">OrganizationProgrammaticUserAccounts</a>]

---


### OrganizationProgrammaticUserPoliciesList <a name="OrganizationProgrammaticUserPoliciesList" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import organization_programmatic_user

organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrganizationProgrammaticUserPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies">OrganizationProgrammaticUserPolicies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OrganizationProgrammaticUserPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies">OrganizationProgrammaticUserPolicies</a>]]

---


### OrganizationProgrammaticUserPoliciesOutputReference <a name="OrganizationProgrammaticUserPoliciesOutputReference" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import organization_programmatic_user

organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyAccountIdsInput">policy_account_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyAccountIds">policy_account_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies">OrganizationProgrammaticUserPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_account_ids_input`<sup>Optional</sup> <a name="policy_account_ids_input" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyAccountIdsInput"></a>

```python
policy_account_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `policy_account_ids`<sup>Required</sup> <a name="policy_account_ids" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyAccountIds"></a>

```python
policy_account_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OrganizationProgrammaticUserPolicies]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies">OrganizationProgrammaticUserPolicies</a>]

---



