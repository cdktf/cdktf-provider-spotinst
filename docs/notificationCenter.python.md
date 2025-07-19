# `notificationCenter` Submodule <a name="`notificationCenter` Submodule" id="@cdktf/provider-spotinst.notificationCenter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationCenter <a name="NotificationCenter" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center spotinst_notification_center}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenter(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compute_policy_config: NotificationCenterComputePolicyConfig,
  privacy_level: str,
  description: str = None,
  id: str = None,
  is_active: typing.Union[bool, IResolvable] = None,
  name: str = None,
  registered_users: typing.Union[IResolvable, typing.List[NotificationCenterRegisteredUsers]] = None,
  subscriptions: typing.Union[IResolvable, typing.List[NotificationCenterSubscriptions]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.computePolicyConfig">compute_policy_config</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a></code> | compute_policy_config block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.privacyLevel">privacy_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#privacy_level NotificationCenter#privacy_level}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#description NotificationCenter#description}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#id NotificationCenter#id}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.isActive">is_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#is_active NotificationCenter#is_active}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#name NotificationCenter#name}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.registeredUsers">registered_users</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>]]</code> | registered_users block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.subscriptions">subscriptions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>]]</code> | subscriptions block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_policy_config`<sup>Required</sup> <a name="compute_policy_config" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.computePolicyConfig"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

compute_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#compute_policy_config NotificationCenter#compute_policy_config}

---

##### `privacy_level`<sup>Required</sup> <a name="privacy_level" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.privacyLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#privacy_level NotificationCenter#privacy_level}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#description NotificationCenter#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#id NotificationCenter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_active`<sup>Optional</sup> <a name="is_active" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.isActive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#is_active NotificationCenter#is_active}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#name NotificationCenter#name}.

---

##### `registered_users`<sup>Optional</sup> <a name="registered_users" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.registeredUsers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>]]

registered_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#registered_users NotificationCenter#registered_users}

---

##### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.Initializer.parameter.subscriptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>]]

subscriptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#subscriptions NotificationCenter#subscriptions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putComputePolicyConfig">put_compute_policy_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putRegisteredUsers">put_registered_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putSubscriptions">put_subscriptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetIsActive">reset_is_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetRegisteredUsers">reset_registered_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetSubscriptions">reset_subscriptions</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_compute_policy_config` <a name="put_compute_policy_config" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putComputePolicyConfig"></a>

```python
def put_compute_policy_config(
  events: typing.Union[IResolvable, typing.List[NotificationCenterComputePolicyConfigEvents]],
  dynamic_rules: typing.Union[IResolvable, typing.List[NotificationCenterComputePolicyConfigDynamicRules]] = None,
  resource_ids: typing.List[str] = None,
  should_include_all_resources: typing.Union[bool, IResolvable] = None
) -> None
```

###### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putComputePolicyConfig.parameter.events"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>]]

events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#events NotificationCenter#events}

---

###### `dynamic_rules`<sup>Optional</sup> <a name="dynamic_rules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putComputePolicyConfig.parameter.dynamicRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>]]

dynamic_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#dynamic_rules NotificationCenter#dynamic_rules}

---

###### `resource_ids`<sup>Optional</sup> <a name="resource_ids" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putComputePolicyConfig.parameter.resourceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#resource_ids NotificationCenter#resource_ids}.

---

###### `should_include_all_resources`<sup>Optional</sup> <a name="should_include_all_resources" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putComputePolicyConfig.parameter.shouldIncludeAllResources"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#should_include_all_resources NotificationCenter#should_include_all_resources}.

---

##### `put_registered_users` <a name="put_registered_users" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putRegisteredUsers"></a>

```python
def put_registered_users(
  value: typing.Union[IResolvable, typing.List[NotificationCenterRegisteredUsers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putRegisteredUsers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>]]

---

##### `put_subscriptions` <a name="put_subscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putSubscriptions"></a>

```python
def put_subscriptions(
  value: typing.Union[IResolvable, typing.List[NotificationCenterSubscriptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.putSubscriptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_active` <a name="reset_is_active" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetIsActive"></a>

```python
def reset_is_active() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_registered_users` <a name="reset_registered_users" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetRegisteredUsers"></a>

```python
def reset_registered_users() -> None
```

##### `reset_subscriptions` <a name="reset_subscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.resetSubscriptions"></a>

```python
def reset_subscriptions() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NotificationCenter resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NotificationCenter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NotificationCenter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NotificationCenter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotificationCenter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.computePolicyConfig">compute_policy_config</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference">NotificationCenterComputePolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.registeredUsers">registered_users</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList">NotificationCenterRegisteredUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.subscriptions">subscriptions</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList">NotificationCenterSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.computePolicyConfigInput">compute_policy_config_input</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.isActiveInput">is_active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.privacyLevelInput">privacy_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.registeredUsersInput">registered_users_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.subscriptionsInput">subscriptions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.isActive">is_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.privacyLevel">privacy_level</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_policy_config`<sup>Required</sup> <a name="compute_policy_config" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.computePolicyConfig"></a>

```python
compute_policy_config: NotificationCenterComputePolicyConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference">NotificationCenterComputePolicyConfigOutputReference</a>

---

##### `registered_users`<sup>Required</sup> <a name="registered_users" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.registeredUsers"></a>

```python
registered_users: NotificationCenterRegisteredUsersList
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList">NotificationCenterRegisteredUsersList</a>

---

##### `subscriptions`<sup>Required</sup> <a name="subscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.subscriptions"></a>

```python
subscriptions: NotificationCenterSubscriptionsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList">NotificationCenterSubscriptionsList</a>

---

##### `compute_policy_config_input`<sup>Optional</sup> <a name="compute_policy_config_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.computePolicyConfigInput"></a>

```python
compute_policy_config_input: NotificationCenterComputePolicyConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_active_input`<sup>Optional</sup> <a name="is_active_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.isActiveInput"></a>

```python
is_active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `privacy_level_input`<sup>Optional</sup> <a name="privacy_level_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.privacyLevelInput"></a>

```python
privacy_level_input: str
```

- *Type:* str

---

##### `registered_users_input`<sup>Optional</sup> <a name="registered_users_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.registeredUsersInput"></a>

```python
registered_users_input: typing.Union[IResolvable, typing.List[NotificationCenterRegisteredUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>]]

---

##### `subscriptions_input`<sup>Optional</sup> <a name="subscriptions_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.subscriptionsInput"></a>

```python
subscriptions_input: typing.Union[IResolvable, typing.List[NotificationCenterSubscriptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.isActive"></a>

```python
is_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `privacy_level`<sup>Required</sup> <a name="privacy_level" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.privacyLevel"></a>

```python
privacy_level: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationCenterComputePolicyConfig <a name="NotificationCenterComputePolicyConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenterComputePolicyConfig(
  events: typing.Union[IResolvable, typing.List[NotificationCenterComputePolicyConfigEvents]],
  dynamic_rules: typing.Union[IResolvable, typing.List[NotificationCenterComputePolicyConfigDynamicRules]] = None,
  resource_ids: typing.List[str] = None,
  should_include_all_resources: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.events">events</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>]]</code> | events block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.dynamicRules">dynamic_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>]]</code> | dynamic_rules block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.resourceIds">resource_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#resource_ids NotificationCenter#resource_ids}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.shouldIncludeAllResources">should_include_all_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#should_include_all_resources NotificationCenter#should_include_all_resources}. |

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.events"></a>

```python
events: typing.Union[IResolvable, typing.List[NotificationCenterComputePolicyConfigEvents]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>]]

events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#events NotificationCenter#events}

---

##### `dynamic_rules`<sup>Optional</sup> <a name="dynamic_rules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.dynamicRules"></a>

```python
dynamic_rules: typing.Union[IResolvable, typing.List[NotificationCenterComputePolicyConfigDynamicRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>]]

dynamic_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#dynamic_rules NotificationCenter#dynamic_rules}

---

##### `resource_ids`<sup>Optional</sup> <a name="resource_ids" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.resourceIds"></a>

```python
resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#resource_ids NotificationCenter#resource_ids}.

---

##### `should_include_all_resources`<sup>Optional</sup> <a name="should_include_all_resources" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig.property.shouldIncludeAllResources"></a>

```python
should_include_all_resources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#should_include_all_resources NotificationCenter#should_include_all_resources}.

---

### NotificationCenterComputePolicyConfigDynamicRules <a name="NotificationCenterComputePolicyConfigDynamicRules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenterComputePolicyConfigDynamicRules(
  filter_conditions: typing.Union[IResolvable, typing.List[NotificationCenterComputePolicyConfigDynamicRulesFilterConditions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules.property.filterConditions">filter_conditions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>]]</code> | filter_conditions block. |

---

##### `filter_conditions`<sup>Optional</sup> <a name="filter_conditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules.property.filterConditions"></a>

```python
filter_conditions: typing.Union[IResolvable, typing.List[NotificationCenterComputePolicyConfigDynamicRulesFilterConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>]]

filter_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#filter_conditions NotificationCenter#filter_conditions}

---

### NotificationCenterComputePolicyConfigDynamicRulesFilterConditions <a name="NotificationCenterComputePolicyConfigDynamicRulesFilterConditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions(
  expression: str = None,
  identifier: str = None,
  operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#expression NotificationCenter#expression}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#identifier NotificationCenter#identifier}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#operator NotificationCenter#operator}. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#expression NotificationCenter#expression}.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#identifier NotificationCenter#identifier}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#operator NotificationCenter#operator}.

---

### NotificationCenterComputePolicyConfigEvents <a name="NotificationCenterComputePolicyConfigEvents" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenterComputePolicyConfigEvents(
  event: str = None,
  event_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.property.event">event</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#event NotificationCenter#event}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.property.eventType">event_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#event_type NotificationCenter#event_type}. |

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.property.event"></a>

```python
event: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#event NotificationCenter#event}.

---

##### `event_type`<sup>Optional</sup> <a name="event_type" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#event_type NotificationCenter#event_type}.

---

### NotificationCenterConfig <a name="NotificationCenterConfig" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compute_policy_config: NotificationCenterComputePolicyConfig,
  privacy_level: str,
  description: str = None,
  id: str = None,
  is_active: typing.Union[bool, IResolvable] = None,
  name: str = None,
  registered_users: typing.Union[IResolvable, typing.List[NotificationCenterRegisteredUsers]] = None,
  subscriptions: typing.Union[IResolvable, typing.List[NotificationCenterSubscriptions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.computePolicyConfig">compute_policy_config</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a></code> | compute_policy_config block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.privacyLevel">privacy_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#privacy_level NotificationCenter#privacy_level}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#description NotificationCenter#description}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#id NotificationCenter#id}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.isActive">is_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#is_active NotificationCenter#is_active}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#name NotificationCenter#name}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.registeredUsers">registered_users</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>]]</code> | registered_users block. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.subscriptions">subscriptions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>]]</code> | subscriptions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_policy_config`<sup>Required</sup> <a name="compute_policy_config" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.computePolicyConfig"></a>

```python
compute_policy_config: NotificationCenterComputePolicyConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

compute_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#compute_policy_config NotificationCenter#compute_policy_config}

---

##### `privacy_level`<sup>Required</sup> <a name="privacy_level" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.privacyLevel"></a>

```python
privacy_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#privacy_level NotificationCenter#privacy_level}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#description NotificationCenter#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#id NotificationCenter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_active`<sup>Optional</sup> <a name="is_active" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.isActive"></a>

```python
is_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#is_active NotificationCenter#is_active}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#name NotificationCenter#name}.

---

##### `registered_users`<sup>Optional</sup> <a name="registered_users" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.registeredUsers"></a>

```python
registered_users: typing.Union[IResolvable, typing.List[NotificationCenterRegisteredUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>]]

registered_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#registered_users NotificationCenter#registered_users}

---

##### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterConfig.property.subscriptions"></a>

```python
subscriptions: typing.Union[IResolvable, typing.List[NotificationCenterSubscriptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>]]

subscriptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#subscriptions NotificationCenter#subscriptions}

---

### NotificationCenterRegisteredUsers <a name="NotificationCenterRegisteredUsers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenterRegisteredUsers(
  subscription_types: typing.List[str] = None,
  user_email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.property.subscriptionTypes">subscription_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#subscription_types NotificationCenter#subscription_types}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.property.userEmail">user_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#user_email NotificationCenter#user_email}. |

---

##### `subscription_types`<sup>Optional</sup> <a name="subscription_types" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.property.subscriptionTypes"></a>

```python
subscription_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#subscription_types NotificationCenter#subscription_types}.

---

##### `user_email`<sup>Optional</sup> <a name="user_email" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers.property.userEmail"></a>

```python
user_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#user_email NotificationCenter#user_email}.

---

### NotificationCenterSubscriptions <a name="NotificationCenterSubscriptions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenterSubscriptions(
  endpoint: str = None,
  subscription_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.property.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#endpoint NotificationCenter#endpoint}. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.property.subscriptionType">subscription_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#subscription_type NotificationCenter#subscription_type}. |

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#endpoint NotificationCenter#endpoint}.

---

##### `subscription_type`<sup>Optional</sup> <a name="subscription_type" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions.property.subscriptionType"></a>

```python
subscription_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.0/docs/resources/notification_center#subscription_type NotificationCenter#subscription_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList <a name="NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NotificationCenterComputePolicyConfigDynamicRulesFilterConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>]]

---


### NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference <a name="NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetIdentifier">reset_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetOperator">reset_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_identifier` <a name="reset_identifier" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetIdentifier"></a>

```python
def reset_identifier() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotificationCenterComputePolicyConfigDynamicRulesFilterConditions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>]

---


### NotificationCenterComputePolicyConfigDynamicRulesList <a name="NotificationCenterComputePolicyConfigDynamicRulesList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NotificationCenterComputePolicyConfigDynamicRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NotificationCenterComputePolicyConfigDynamicRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>]]

---


### NotificationCenterComputePolicyConfigDynamicRulesOutputReference <a name="NotificationCenterComputePolicyConfigDynamicRulesOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.putFilterConditions">put_filter_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resetFilterConditions">reset_filter_conditions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter_conditions` <a name="put_filter_conditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.putFilterConditions"></a>

```python
def put_filter_conditions(
  value: typing.Union[IResolvable, typing.List[NotificationCenterComputePolicyConfigDynamicRulesFilterConditions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.putFilterConditions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>]]

---

##### `reset_filter_conditions` <a name="reset_filter_conditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.resetFilterConditions"></a>

```python
def reset_filter_conditions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.filterConditions">filter_conditions</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList">NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.filterConditionsInput">filter_conditions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_conditions`<sup>Required</sup> <a name="filter_conditions" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.filterConditions"></a>

```python
filter_conditions: NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList">NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList</a>

---

##### `filter_conditions_input`<sup>Optional</sup> <a name="filter_conditions_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.filterConditionsInput"></a>

```python
filter_conditions_input: typing.Union[IResolvable, typing.List[NotificationCenterComputePolicyConfigDynamicRulesFilterConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesFilterConditions">NotificationCenterComputePolicyConfigDynamicRulesFilterConditions</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotificationCenterComputePolicyConfigDynamicRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>]

---


### NotificationCenterComputePolicyConfigEventsList <a name="NotificationCenterComputePolicyConfigEventsList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenterComputePolicyConfigEventsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NotificationCenterComputePolicyConfigEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NotificationCenterComputePolicyConfigEvents]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>]]

---


### NotificationCenterComputePolicyConfigEventsOutputReference <a name="NotificationCenterComputePolicyConfigEventsOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resetEvent">reset_event</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resetEventType">reset_event_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_event` <a name="reset_event" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resetEvent"></a>

```python
def reset_event() -> None
```

##### `reset_event_type` <a name="reset_event_type" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.resetEventType"></a>

```python
def reset_event_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventInput">event_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventTypeInput">event_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.event">event</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_input`<sup>Optional</sup> <a name="event_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventInput"></a>

```python
event_input: str
```

- *Type:* str

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventTypeInput"></a>

```python
event_type_input: str
```

- *Type:* str

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.event"></a>

```python
event: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotificationCenterComputePolicyConfigEvents]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>]

---


### NotificationCenterComputePolicyConfigOutputReference <a name="NotificationCenterComputePolicyConfigOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenterComputePolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putDynamicRules">put_dynamic_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putEvents">put_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetDynamicRules">reset_dynamic_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetResourceIds">reset_resource_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetShouldIncludeAllResources">reset_should_include_all_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dynamic_rules` <a name="put_dynamic_rules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putDynamicRules"></a>

```python
def put_dynamic_rules(
  value: typing.Union[IResolvable, typing.List[NotificationCenterComputePolicyConfigDynamicRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putDynamicRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>]]

---

##### `put_events` <a name="put_events" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putEvents"></a>

```python
def put_events(
  value: typing.Union[IResolvable, typing.List[NotificationCenterComputePolicyConfigEvents]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.putEvents.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>]]

---

##### `reset_dynamic_rules` <a name="reset_dynamic_rules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetDynamicRules"></a>

```python
def reset_dynamic_rules() -> None
```

##### `reset_resource_ids` <a name="reset_resource_ids" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetResourceIds"></a>

```python
def reset_resource_ids() -> None
```

##### `reset_should_include_all_resources` <a name="reset_should_include_all_resources" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.resetShouldIncludeAllResources"></a>

```python
def reset_should_include_all_resources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.dynamicRules">dynamic_rules</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList">NotificationCenterComputePolicyConfigDynamicRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.events">events</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList">NotificationCenterComputePolicyConfigEventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.dynamicRulesInput">dynamic_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.eventsInput">events_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.resourceIdsInput">resource_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.shouldIncludeAllResourcesInput">should_include_all_resources_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.resourceIds">resource_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.shouldIncludeAllResources">should_include_all_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dynamic_rules`<sup>Required</sup> <a name="dynamic_rules" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.dynamicRules"></a>

```python
dynamic_rules: NotificationCenterComputePolicyConfigDynamicRulesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRulesList">NotificationCenterComputePolicyConfigDynamicRulesList</a>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.events"></a>

```python
events: NotificationCenterComputePolicyConfigEventsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEventsList">NotificationCenterComputePolicyConfigEventsList</a>

---

##### `dynamic_rules_input`<sup>Optional</sup> <a name="dynamic_rules_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.dynamicRulesInput"></a>

```python
dynamic_rules_input: typing.Union[IResolvable, typing.List[NotificationCenterComputePolicyConfigDynamicRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigDynamicRules">NotificationCenterComputePolicyConfigDynamicRules</a>]]

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.eventsInput"></a>

```python
events_input: typing.Union[IResolvable, typing.List[NotificationCenterComputePolicyConfigEvents]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigEvents">NotificationCenterComputePolicyConfigEvents</a>]]

---

##### `resource_ids_input`<sup>Optional</sup> <a name="resource_ids_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.resourceIdsInput"></a>

```python
resource_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `should_include_all_resources_input`<sup>Optional</sup> <a name="should_include_all_resources_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.shouldIncludeAllResourcesInput"></a>

```python
should_include_all_resources_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.resourceIds"></a>

```python
resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `should_include_all_resources`<sup>Required</sup> <a name="should_include_all_resources" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.shouldIncludeAllResources"></a>

```python
should_include_all_resources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: NotificationCenterComputePolicyConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterComputePolicyConfig">NotificationCenterComputePolicyConfig</a>

---


### NotificationCenterRegisteredUsersList <a name="NotificationCenterRegisteredUsersList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenterRegisteredUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NotificationCenterRegisteredUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NotificationCenterRegisteredUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>]]

---


### NotificationCenterRegisteredUsersOutputReference <a name="NotificationCenterRegisteredUsersOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenterRegisteredUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resetSubscriptionTypes">reset_subscription_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resetUserEmail">reset_user_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_subscription_types` <a name="reset_subscription_types" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resetSubscriptionTypes"></a>

```python
def reset_subscription_types() -> None
```

##### `reset_user_email` <a name="reset_user_email" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.resetUserEmail"></a>

```python
def reset_user_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.subscriptionTypesInput">subscription_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.userEmailInput">user_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.subscriptionTypes">subscription_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.userEmail">user_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subscription_types_input`<sup>Optional</sup> <a name="subscription_types_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.subscriptionTypesInput"></a>

```python
subscription_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_email_input`<sup>Optional</sup> <a name="user_email_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.userEmailInput"></a>

```python
user_email_input: str
```

- *Type:* str

---

##### `subscription_types`<sup>Required</sup> <a name="subscription_types" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.subscriptionTypes"></a>

```python
subscription_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_email`<sup>Required</sup> <a name="user_email" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.userEmail"></a>

```python
user_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotificationCenterRegisteredUsers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterRegisteredUsers">NotificationCenterRegisteredUsers</a>]

---


### NotificationCenterSubscriptionsList <a name="NotificationCenterSubscriptionsList" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenterSubscriptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NotificationCenterSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NotificationCenterSubscriptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>]]

---


### NotificationCenterSubscriptionsOutputReference <a name="NotificationCenterSubscriptionsOutputReference" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import notification_center

notificationCenter.NotificationCenterSubscriptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resetSubscriptionType">reset_subscription_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_subscription_type` <a name="reset_subscription_type" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.resetSubscriptionType"></a>

```python
def reset_subscription_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.subscriptionTypeInput">subscription_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.subscriptionType">subscription_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `subscription_type_input`<sup>Optional</sup> <a name="subscription_type_input" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.subscriptionTypeInput"></a>

```python
subscription_type_input: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `subscription_type`<sup>Required</sup> <a name="subscription_type" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.subscriptionType"></a>

```python
subscription_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotificationCenterSubscriptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.notificationCenter.NotificationCenterSubscriptions">NotificationCenterSubscriptions</a>]

---



