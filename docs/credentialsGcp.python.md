# `credentialsGcp` Submodule <a name="`credentialsGcp` Submodule" id="@cdktf/provider-spotinst.credentialsGcp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CredentialsGcp <a name="CredentialsGcp" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp spotinst_credentials_gcp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import credentials_gcp

credentialsGcp.CredentialsGcp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  auth_provider_x509_cert_url: str,
  auth_uri: str,
  client_email: str,
  client_id: str,
  client_x509_cert_url: str,
  private_key: str,
  private_key_id: str,
  project_id: str,
  token_uri: str,
  type: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#account_id CredentialsGcp#account_id}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.authProviderX509CertUrl">auth_provider_x509_cert_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#auth_provider_x509_cert_url CredentialsGcp#auth_provider_x509_cert_url}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.authUri">auth_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#auth_uri CredentialsGcp#auth_uri}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.clientEmail">client_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#client_email CredentialsGcp#client_email}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#client_id CredentialsGcp#client_id}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.clientX509CertUrl">client_x509_cert_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#client_x509_cert_url CredentialsGcp#client_x509_cert_url}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#private_key CredentialsGcp#private_key}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.privateKeyId">private_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#private_key_id CredentialsGcp#private_key_id}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#project_id CredentialsGcp#project_id}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.tokenUri">token_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#token_uri CredentialsGcp#token_uri}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#type CredentialsGcp#type}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#id CredentialsGcp#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#account_id CredentialsGcp#account_id}.

---

##### `auth_provider_x509_cert_url`<sup>Required</sup> <a name="auth_provider_x509_cert_url" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.authProviderX509CertUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#auth_provider_x509_cert_url CredentialsGcp#auth_provider_x509_cert_url}.

---

##### `auth_uri`<sup>Required</sup> <a name="auth_uri" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.authUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#auth_uri CredentialsGcp#auth_uri}.

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.clientEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#client_email CredentialsGcp#client_email}.

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#client_id CredentialsGcp#client_id}.

---

##### `client_x509_cert_url`<sup>Required</sup> <a name="client_x509_cert_url" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.clientX509CertUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#client_x509_cert_url CredentialsGcp#client_x509_cert_url}.

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.privateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#private_key CredentialsGcp#private_key}.

---

##### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.privateKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#private_key_id CredentialsGcp#private_key_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#project_id CredentialsGcp#project_id}.

---

##### `token_uri`<sup>Required</sup> <a name="token_uri" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.tokenUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#token_uri CredentialsGcp#token_uri}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#type CredentialsGcp#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#id CredentialsGcp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CredentialsGcp resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import credentials_gcp

credentialsGcp.CredentialsGcp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import credentials_gcp

credentialsGcp.CredentialsGcp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import credentials_gcp

credentialsGcp.CredentialsGcp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_spotinst import credentials_gcp

credentialsGcp.CredentialsGcp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CredentialsGcp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CredentialsGcp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CredentialsGcp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CredentialsGcp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.authProviderX509CertUrlInput">auth_provider_x509_cert_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.authUriInput">auth_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientEmailInput">client_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientX509CertUrlInput">client_x509_cert_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.privateKeyIdInput">private_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.tokenUriInput">token_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.authProviderX509CertUrl">auth_provider_x509_cert_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.authUri">auth_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientEmail">client_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientX509CertUrl">client_x509_cert_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.privateKeyId">private_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.tokenUri">token_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `auth_provider_x509_cert_url_input`<sup>Optional</sup> <a name="auth_provider_x509_cert_url_input" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.authProviderX509CertUrlInput"></a>

```python
auth_provider_x509_cert_url_input: str
```

- *Type:* str

---

##### `auth_uri_input`<sup>Optional</sup> <a name="auth_uri_input" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.authUriInput"></a>

```python
auth_uri_input: str
```

- *Type:* str

---

##### `client_email_input`<sup>Optional</sup> <a name="client_email_input" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientEmailInput"></a>

```python
client_email_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_x509_cert_url_input`<sup>Optional</sup> <a name="client_x509_cert_url_input" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientX509CertUrlInput"></a>

```python
client_x509_cert_url_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `private_key_id_input`<sup>Optional</sup> <a name="private_key_id_input" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.privateKeyIdInput"></a>

```python
private_key_id_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `token_uri_input`<sup>Optional</sup> <a name="token_uri_input" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.tokenUriInput"></a>

```python
token_uri_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `auth_provider_x509_cert_url`<sup>Required</sup> <a name="auth_provider_x509_cert_url" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.authProviderX509CertUrl"></a>

```python
auth_provider_x509_cert_url: str
```

- *Type:* str

---

##### `auth_uri`<sup>Required</sup> <a name="auth_uri" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.authUri"></a>

```python
auth_uri: str
```

- *Type:* str

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientEmail"></a>

```python
client_email: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_x509_cert_url`<sup>Required</sup> <a name="client_x509_cert_url" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientX509CertUrl"></a>

```python
client_x509_cert_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `token_uri`<sup>Required</sup> <a name="token_uri" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.tokenUri"></a>

```python
token_uri: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialsGcpConfig <a name="CredentialsGcpConfig" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import credentials_gcp

credentialsGcp.CredentialsGcpConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  auth_provider_x509_cert_url: str,
  auth_uri: str,
  client_email: str,
  client_id: str,
  client_x509_cert_url: str,
  private_key: str,
  private_key_id: str,
  project_id: str,
  token_uri: str,
  type: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#account_id CredentialsGcp#account_id}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.authProviderX509CertUrl">auth_provider_x509_cert_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#auth_provider_x509_cert_url CredentialsGcp#auth_provider_x509_cert_url}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.authUri">auth_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#auth_uri CredentialsGcp#auth_uri}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.clientEmail">client_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#client_email CredentialsGcp#client_email}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#client_id CredentialsGcp#client_id}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.clientX509CertUrl">client_x509_cert_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#client_x509_cert_url CredentialsGcp#client_x509_cert_url}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#private_key CredentialsGcp#private_key}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.privateKeyId">private_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#private_key_id CredentialsGcp#private_key_id}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#project_id CredentialsGcp#project_id}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.tokenUri">token_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#token_uri CredentialsGcp#token_uri}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#type CredentialsGcp#type}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#id CredentialsGcp#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#account_id CredentialsGcp#account_id}.

---

##### `auth_provider_x509_cert_url`<sup>Required</sup> <a name="auth_provider_x509_cert_url" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.authProviderX509CertUrl"></a>

```python
auth_provider_x509_cert_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#auth_provider_x509_cert_url CredentialsGcp#auth_provider_x509_cert_url}.

---

##### `auth_uri`<sup>Required</sup> <a name="auth_uri" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.authUri"></a>

```python
auth_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#auth_uri CredentialsGcp#auth_uri}.

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.clientEmail"></a>

```python
client_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#client_email CredentialsGcp#client_email}.

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#client_id CredentialsGcp#client_id}.

---

##### `client_x509_cert_url`<sup>Required</sup> <a name="client_x509_cert_url" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.clientX509CertUrl"></a>

```python
client_x509_cert_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#client_x509_cert_url CredentialsGcp#client_x509_cert_url}.

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#private_key CredentialsGcp#private_key}.

---

##### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#private_key_id CredentialsGcp#private_key_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#project_id CredentialsGcp#project_id}.

---

##### `token_uri`<sup>Required</sup> <a name="token_uri" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.tokenUri"></a>

```python
token_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#token_uri CredentialsGcp#token_uri}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#type CredentialsGcp#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.197.1/docs/resources/credentials_gcp#id CredentialsGcp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



